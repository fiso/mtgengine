"use strict";
const Constants = require ("../../../Constants");
const SliceinTwainBase = require("../setXLN/SliceinTwain");

class SliceinTwain extends SliceinTwainBase {
  constructor (game) {
    super(game, "Slice in Twain", "Commander 2013", "C13");
  }
}

module.exports = SliceinTwain;
