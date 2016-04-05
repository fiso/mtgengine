"use strict";
const Constants = require ("../../../Constants");
const KeepersoftheFaithBase = require("../setCHR/KeepersoftheFaith");

class KeepersoftheFaith extends KeepersoftheFaithBase {
  constructor(game) {
    super(game, "Keepers of the Faith", "Legends", "LEG");
  }
}

module.exports = KeepersoftheFaith;
