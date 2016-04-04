"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YomijiWhoBarstheWay extends Card {
  constructor(game) {
    super(game, "Yomiji, Who Bars the Way", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = YomijiWhoBarstheWay;
