"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NephaliaAcademy extends UnimplementedCard {
  constructor (game) {
    super(game, "Nephalia Academy", "Eldritch Moon", "EMN");
  }
}

module.exports = NephaliaAcademy;
