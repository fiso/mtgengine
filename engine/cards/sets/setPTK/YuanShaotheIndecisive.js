"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YuanShaotheIndecisive extends UnimplementedCard {
  constructor(game) {
    super(game, "Yuan Shao, the Indecisive", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YuanShaotheIndecisive;
