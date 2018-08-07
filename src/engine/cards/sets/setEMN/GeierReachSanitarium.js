"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeierReachSanitarium extends UnimplementedCard {
  constructor (game) {
    super(game, "Geier Reach Sanitarium", "Eldritch Moon", "EMN");
  }
}

module.exports = GeierReachSanitarium;
