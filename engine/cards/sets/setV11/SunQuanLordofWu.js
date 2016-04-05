"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunQuanLordofWu extends UnimplementedCard {
  constructor(game) {
    super(game, "Sun Quan, Lord of Wu", "From the Vault: Legends", "V11");
  }
}

module.exports = SunQuanLordofWu;
