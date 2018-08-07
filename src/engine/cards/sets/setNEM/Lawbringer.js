"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lawbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Lawbringer", "Nemesis", "NEM");
  }
}

module.exports = Lawbringer;
