"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonehornDignitary extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonehorn Dignitary", "Magic 2012", "M12");
  }
}

module.exports = StonehornDignitary;
