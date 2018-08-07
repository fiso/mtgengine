"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvengerofZendikar extends UnimplementedCard {
  constructor (game) {
    super(game, "Avenger of Zendikar", "Commander 2018", "C18");
  }
}

module.exports = AvengerofZendikar;
