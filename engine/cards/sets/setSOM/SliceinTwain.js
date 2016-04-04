"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SliceinTwainBase = require("../setC13/SliceinTwain.js");

class SliceinTwain extends SliceinTwainBase {
  constructor(game) {
    super(game, "Slice in Twain", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SliceinTwain;
