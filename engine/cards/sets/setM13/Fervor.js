"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FervorBase = require("../set6ED/Fervor.js");

class Fervor extends FervorBase {
  constructor(game) {
    super(game, "Fervor", "Magic 2013", "M13");
  }
}

module.exports = Fervor;
