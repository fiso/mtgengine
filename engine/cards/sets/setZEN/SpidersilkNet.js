"use strict";
const Constants = require ("../../../Constants");
const SpidersilkNetBase = require("../setDTK/SpidersilkNet");

class SpidersilkNet extends SpidersilkNetBase {
  constructor(game) {
    super(game, "Spidersilk Net", "Zendikar", "ZEN");
  }
}

module.exports = SpidersilkNet;
