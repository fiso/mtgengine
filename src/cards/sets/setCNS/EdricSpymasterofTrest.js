"use strict";
const Constants = require ("../../../Constants");
const EdricSpymasterofTrestBase = require("../setCM1/EdricSpymasterofTrest");

class EdricSpymasterofTrest extends EdricSpymasterofTrestBase {
  constructor (game) {
    super(game, "Edric, Spymaster of Trest", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = EdricSpymasterofTrest;
