"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DomesticationBase = require("../setM14/Domestication.js");

class Domestication extends DomesticationBase {
  constructor(game) {
    super(game, "Domestication", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Domestication;
