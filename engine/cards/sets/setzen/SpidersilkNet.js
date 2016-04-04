"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpidersilkNetBase = require("../setDTK/SpidersilkNet.js");

class SpidersilkNet extends SpidersilkNetBase {
  constructor(game) {
    super(game, "Spidersilk Net", "Zendikar", "ZEN");
  }
}

module.exports = SpidersilkNet;
