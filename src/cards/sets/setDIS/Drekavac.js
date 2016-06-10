"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Drekavac extends UnimplementedCard {
  constructor (game) {
    super(game, "Drekavac", "Dissension", "DIS");
  }
}

module.exports = Drekavac;
