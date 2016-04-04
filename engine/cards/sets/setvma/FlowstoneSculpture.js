"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneSculptureBase = require("../setTMP/FlowstoneSculpture.js");

class FlowstoneSculpture extends FlowstoneSculptureBase {
  constructor(game) {
    super(game, "Flowstone Sculpture", "Vintage Masters", "VMA");
  }
}

module.exports = FlowstoneSculpture;
