"use strict";
const Constants = require ("../../../Constants");
const AnkhofMishraBase = require("../set6ED/AnkhofMishra");

class AnkhofMishra extends AnkhofMishraBase {
  constructor(game) {
    super(game, "Ankh of Mishra", "Fourth Edition", "4ED");
  }
}

module.exports = AnkhofMishra;
