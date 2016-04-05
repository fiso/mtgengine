"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KusariGama extends UnimplementedCard {
  constructor(game) {
    super(game, "Kusari-Gama", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KusariGama;
