"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisceridDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Viscerid Drone", "Masters Edition II", "ME2");
  }
}

module.exports = VisceridDrone;
