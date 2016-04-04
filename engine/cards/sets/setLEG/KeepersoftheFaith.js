"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeepersoftheFaithBase = require("../setCHR/KeepersoftheFaith.js");

class KeepersoftheFaith extends KeepersoftheFaithBase {
  constructor(game) {
    super(game, "Keepers of the Faith", "Legends", "LEG");
  }
}

module.exports = KeepersoftheFaith;
