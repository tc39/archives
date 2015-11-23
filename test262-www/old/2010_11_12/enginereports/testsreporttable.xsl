<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
    <xsl:output method="html" indent="yes"/>
    <xsl:variable name="RED_LIMIT" select="50"/>
    <xsl:variable name="YELLOW_LIMIT" select="75"/>
    <xsl:variable name="GREEN_LIMIT" select="99.9"/>
  
  <xsl:template match="testReport">
      <table id="SummaryTable" width="100%" class="browser-results-data-table" border="0" cellSpacing="0" cellPadding="0">
      <tbody>
      <!-- Header -->
        <tr class="reportTblHeader">
          <td width="20%"><!-- first column for the section list--></td>
          <xsl:for-each select="testRun">
          <td>
            <xsl:value-of select="browserName"/>
            <br/>
            <xsl:value-of select="Date"/>
            <br/>
            <xsl:value-of select="targetTestSuiteName"/>
            <br/>
            <xsl:value-of select="targetTestSuiteID"/>
          </td>
          </xsl:for-each>
        </tr>
        <!-- end Header -->
        <tr>
          <td>
            <b>ES5 Pass Rate:</b>
          </td>
          <xsl:for-each select="testRun">
          <td>
            <b>
            <xsl:value-of select='format-number(count(.//section/test/res[text() ="pass"]) div (count(.//section/test)),"#.00%")'/>
            </b>
          </td>
          </xsl:for-each>
        </tr>

        <xsl:for-each select="testRun[position() = 1]/Tests/section">
          <tr>
            <td width="10%">
              <xsl:element name="a">
                <xsl:attribute name="href">
                  <xsl:value-of select="concat('javascript:createDetailsTable(&quot;',@id,'&quot;);')"/>
                </xsl:attribute>
                <xsl:value-of select="@id"/> - <xsl:value-of select="@name"/>
              </xsl:element>
            </td>
            <xsl:variable name="id" select="@id"/>
            <xsl:for-each select="//testRun/Tests/section[@id = $id]">
              <xsl:variable name="passRate" select="round((count(descendant::test/res[text() ='pass'])) div (count(descendant::test)) * 100)"/>
              <xsl:variable name="tdClass" select="'ReportGreen'"/>
              <xsl:call-template name="passRateCell">
                <xsl:with-param name="passRate" select="$passRate"/>
                <xsl:with-param name="pass" select="count(descendant::test/res[text() ='pass'])"/>
                <xsl:with-param name="total" select="count(descendant::test)"/>
              </xsl:call-template>
            </xsl:for-each>
          </tr> 
        </xsl:for-each>
        
      </tbody>
      </table>
    </xsl:template>
  <xsl:template name="passRateCell">
    <xsl:param name="passRate"/>
    <xsl:param name="pass"/>
    <xsl:param name="total"/>
    <xsl:choose>
      <xsl:when test="$passRate &gt; $GREEN_LIMIT">
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'ReportGreen'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % - 
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:when>
      <xsl:when test="$passRate &gt;= $YELLOW_LIMIT">
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'ReportLightGreen'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % - 
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:when>
      <xsl:when test="$passRate &gt; $RED_LIMIT">
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'ReportYellow'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % - 
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:when>
      <xsl:otherwise>
          <xsl:element name="td">
            <xsl:attribute name="class">
              <xsl:value-of select="'ReportRed'"/>
            </xsl:attribute>
            <xsl:value-of select="$passRate"/> % - 
            <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
          </xsl:element>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
