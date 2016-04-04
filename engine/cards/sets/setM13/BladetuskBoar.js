"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BladetuskBoarBase = require("../setJOU/BladetuskBoar.js");

class BladetuskBoar extends BladetuskBoarBase {
  constructor(game) {
    super(game, "Bladetusk Boar", "Magic 2013", "M13");
  }
}

module.exports = BladetuskBoar;
