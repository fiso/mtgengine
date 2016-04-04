"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KamahlFistofKrosaBase = require("../setARC/KamahlFistofKrosa.js");

class KamahlFistofKrosa extends KamahlFistofKrosaBase {
  constructor(game) {
    super(game, "Kamahl, Fist of Krosa", "Onslaught", "ONS");
  }
}

module.exports = KamahlFistofKrosa;
