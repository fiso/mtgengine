"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YomijiWhoBarstheWay extends UnimplementedCard {
  constructor(game) {
    super(game, "Yomiji, Who Bars the Way", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = YomijiWhoBarstheWay;
