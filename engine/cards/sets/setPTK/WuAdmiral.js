"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuAdmiral extends UnimplementedCard {
  constructor(game) {
    super(game, "Wu Admiral", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuAdmiral;
