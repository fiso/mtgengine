"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnkhofMishraBase = require("../set6ED/AnkhofMishra.js");

class AnkhofMishra extends AnkhofMishraBase {
  constructor(game) {
    super(game, "Ankh of Mishra", "Fifth Edition", "5ED");
  }
}

module.exports = AnkhofMishra;
