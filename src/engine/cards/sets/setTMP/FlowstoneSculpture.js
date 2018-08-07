"use strict";
const Constants = require ("../../../Constants");
const FlowstoneSculptureBase = require("../setVMA/FlowstoneSculpture");

class FlowstoneSculpture extends FlowstoneSculptureBase {
  constructor (game) {
    super(game, "Flowstone Sculpture", "Tempest", "TMP");
  }
}

module.exports = FlowstoneSculpture;
