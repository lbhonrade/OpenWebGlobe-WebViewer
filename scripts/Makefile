CLOSURE_LIBRARY=../external/closure-library
COMPILATION_LEVEL=WHITESPACE_ONLY
COMPILER_JAR=../external/closure/compiler.jar
SOURCES=$(shell find ../source/core ../source/core/layer ../source/core/nodes ../source/core/og ../source/core/aoe -maxdepth 1 -name \*.js)
TARGETS=\
	../compiled/deps.js \
	../compiled/owg-optimized.js \
	../compiled/owg-optimized.map

.PHONY: all
all: $(TARGETS)

# FIXME Consider transitioning to npx closure-make-deps
../compiled/deps.js: $(SOURCES) Makefile $(COMPILER_JAR) $(CLOSURE_LIBRARY)
	$(CLOSURE_LIBRARY)/closure/bin/build/depswriter.py \
		--root_with_prefix="$(CLOSURE_LIBRARY)/closure/ ../" \
		--root_with_prefix="../source/core/ ../../../../source/core/" \
		--output_file=$@

../compiled/owg-optimized.js ../compiled/owg-optimized.map: $(SOURCES) Makefile $(CLOSURE_LIBRARY) $(COMPILER_JAR)
	$(CLOSURE_LIBRARY)/closure/bin/build/closurebuilder.py \
		--compiler_flags=--compilation_level=$(COMPILATION_LEVEL) \
		--compiler_flags=--create_source_map=../compiled/owg-optimized.map \
		--compiler_flags=--externs=../source/externs/webgl_fixes.js \
		--compiler_flags=--warning_level=VERBOSE \
		--compiler_jar=$(COMPILER_JAR) \
		--namespace=owg.OpenWebGlobe \
		--output_file=$@ \
		--output_mode=compiled \
		--root=../external/closure-library/ \
		--root=../source/core/

.PHONY: clean
clean:
	rm -f $(TARGETS)

.PHONY: lint
lint:
	gjslint --strict $(SOURCES)

$(COMPILER_JAR):
	mkdir -p $(dirname $COMPILER_JAR)
	curl -o $(dirname $COMPILER_JAR)/compiler.jar 'https://repo1.maven.org/maven2/com/google/javascript/closure-compiler/v20240317/closure-compiler-v20240317.jar'
	# cd ../
	# npm install
	# cd scripts/

$(CLOSURE_LIBRARY):
	git clone git@github.com:google/closure-library.git ../external/closure-library
