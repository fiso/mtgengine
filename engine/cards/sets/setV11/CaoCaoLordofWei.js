"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaoCaoLordofWei extends UnimplementedCard {
  constructor(game) {
    super(game, "Cao Cao, Lord of Wei", "From the Vault: Legends", "V11");
  }
}

module.exports = CaoCaoLordofWei;
