"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lawbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Lawbringer", "Nemesis", "NMS");
  }
}

module.exports = Lawbringer;
