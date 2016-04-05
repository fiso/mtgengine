"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoathsomeCatoblepas extends UnimplementedCard {
  constructor(game) {
    super(game, "Loathsome Catoblepas", "Theros", "THS");
  }
}

module.exports = LoathsomeCatoblepas;
