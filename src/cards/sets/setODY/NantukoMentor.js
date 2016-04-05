"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Nantuko Mentor", "Odyssey", "ODY");
  }
}

module.exports = NantukoMentor;
