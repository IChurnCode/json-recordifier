var aggregateJsonRecord = module.exports.aggregateJsonRecord = function (rawData, metricToVisualize, metricsToAggregate) {
    var imData = {};
    rawData.forEach(function(curRecord, index, array) {
      var curItem = imData;
      for (var i = 0; i < metricsToAggregate.length; i++) {
        var attrValue = curRecord[metricsToAggregate[i]];
        if (!curItem[attrValue]) {
          if (i == metricsToAggregate.length - 1)
            curItem[attrValue] = curRecord[metricToVisualize];
          else curItem[attrValue] = {};
        } else {
          if (i == metricsToAggregate.length - 1)
            curItem[attrValue] += curRecord[metricToVisualize];
        }
        curItem = curItem[attrValue];
      }
      curItem.value = curRecord[metricToVisualize];
    });
    return imData;
};