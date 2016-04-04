"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FervorBase = require("../set6ED/Fervor.js");

class Fervor extends FervorBase {
  constructor(game) {
    super(game, "Fervor", "Weatherlight", "WTH");
  }
}

module.exports = Fervor;
