"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvengerofZendikar extends Card {
  constructor(game) {
    super(game, "Avenger of Zendikar", "Commander 2013 Edition", "C13");
  }
}

module.exports = AvengerofZendikar;
