"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiviningWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Divining Witch", "Nemesis", "NMS");
  }
}

module.exports = DiviningWitch;
