"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MastertheWay extends UnimplementedCard {
  constructor(game) {
    super(game, "Master the Way", "Khans of Tarkir", "KTK");
  }
}

module.exports = MastertheWay;
