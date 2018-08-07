"use strict";
const Constants = require ("../../../Constants");
const NezumiBoneReaderBase = require("../setPHUK/NezumiBoneReader");

class NezumiBoneReader extends NezumiBoneReaderBase {
  constructor (game) {
    super(game, "Nezumi Bone-Reader", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiBoneReader;
