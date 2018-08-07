"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IpnuRivulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Ipnu Rivulet", "Hour of Devastation", "HOU");
  }
}

module.exports = IpnuRivulet;
