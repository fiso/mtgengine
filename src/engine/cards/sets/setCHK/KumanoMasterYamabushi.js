"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KumanoMasterYamabushi extends UnimplementedCard {
  constructor (game) {
    super(game, "Kumano, Master Yamabushi", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KumanoMasterYamabushi;
