"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EdricSpymasterofTrestBase = require("../setCM1/EdricSpymasterofTrest.js");

class EdricSpymasterofTrest extends EdricSpymasterofTrestBase {
  constructor(game) {
    super(game, "Edric, Spymaster of Trest", "Vintage Masters", "VMA");
  }
}

module.exports = EdricSpymasterofTrest;
