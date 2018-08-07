"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QilinsBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Qilin's Blessing", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = QilinsBlessing;
