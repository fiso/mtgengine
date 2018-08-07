"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Seeker", "Magic 2012", "M12");
  }
}

module.exports = BloodSeeker;
