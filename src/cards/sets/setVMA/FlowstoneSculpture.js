"use strict";
const Constants = require ("../../../Constants");
const FlowstoneSculptureBase = require("../setTMP/FlowstoneSculpture");

class FlowstoneSculpture extends FlowstoneSculptureBase {
  constructor (game) {
    super(game, "Flowstone Sculpture", "Vintage Masters", "VMA");
  }
}

module.exports = FlowstoneSculpture;
