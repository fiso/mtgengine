"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HootingMandrills extends UnimplementedCard {
  constructor (game) {
    super(game, "Hooting Mandrills", "Khans of Tarkir", "KTK");
  }
}

module.exports = HootingMandrills;
