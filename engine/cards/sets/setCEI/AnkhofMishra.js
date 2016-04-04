"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnkhofMishraBase = require("../set6ED/AnkhofMishra.js");

class AnkhofMishra extends AnkhofMishraBase {
  constructor(game) {
    super(game, "Ankh of Mishra", "International Collector's Edition", "CEI");
  }
}

module.exports = AnkhofMishra;
