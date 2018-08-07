"use strict";
const Constants = require ("../../../Constants");
const AnkhofMishraBase = require("../setVMA/AnkhofMishra");

class AnkhofMishra extends AnkhofMishraBase {
  constructor (game) {
    super(game, "Ankh of Mishra", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = AnkhofMishra;
