"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UmaraRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Umara Raptor", "Zendikar", "ZEN");
  }
}

module.exports = UmaraRaptor;
