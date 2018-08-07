"use strict";
const Constants = require ("../../../Constants");
const PangTongYoungPhoenixBase = require("../setPZ2/PangTongYoungPhoenix");

class PangTongYoungPhoenix extends PangTongYoungPhoenixBase {
  constructor (game) {
    super(game, "Pang Tong, \"Young Phoenix\"", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PangTongYoungPhoenix;
