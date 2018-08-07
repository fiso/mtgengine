"use strict";
const Constants = require ("../../../Constants");
const SliceinTwainBase = require("../setXLN/SliceinTwain");

class SliceinTwain extends SliceinTwainBase {
  constructor (game) {
    super(game, "Slice in Twain", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SliceinTwain;
