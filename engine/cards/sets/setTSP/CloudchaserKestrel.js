"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudchaserKestrel extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloudchaser Kestrel", "Time Spiral", "TSP");
  }
}

module.exports = CloudchaserKestrel;
