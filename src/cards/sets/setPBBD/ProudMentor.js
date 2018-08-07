"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProudMentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Proud Mentor", "Battlebond Promos", "PBBD");
  }
}

module.exports = ProudMentor;
